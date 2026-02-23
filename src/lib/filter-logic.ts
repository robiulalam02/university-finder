import { universities } from "./data";
import { FilterParams } from "@/src/types";

export async function getFilteredUniversities(params: FilterParams) {
    // Simulate network delay for that professional "loading" feel
    await new Promise((resolve) => setTimeout(resolve, 400));

    const allFiltered = universities.filter((uni) => {
        // 1. Name Search
        const matchName = !params.name ||
            uni.name.toLowerCase().includes(params.name.toLowerCase());

        // 2. Country Filter
        const matchCountry = !params.country ||
            uni.country === params.country;

        // 3. Ranking Filter (Max Ranking)
        const matchRanking = !params.minRanking ||
            uni.ranking <= parseInt(params.minRanking);

        // 4. IELTS Filter (Matches exact score selected)
        const matchIelts = !params.ielts ||
            uni.ieltsScore <= parseFloat(params.ielts);

        // 5. Course Filter - NEW
        // Checks if the university offers a course matching the search string
        const matchCourse = !params.course ||
            (uni.courses && uni.courses.some(c =>
                c.toLowerCase().includes(params.course!.toLowerCase())
            ));

        // 6. Tuition Fee Filter - Updated for Slider
        // We use params.maxFee from the slider. If not set, we show all (up to 100k)
        const maxFeeLimit = params.maxFee ? parseInt(params.maxFee) : 100000;
        const matchFee = uni.tuitionFee <= maxFeeLimit;

        return matchName && matchCountry && matchRanking && matchIelts && matchFee && matchCourse;
    });

    // Pagination Logic
    const itemsPerPage = 6;
    const currentPage = parseInt(params.page || "1");
    const totalPages = Math.ceil(allFiltered.length / itemsPerPage);

    const paginatedData = allFiltered.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return {
        data: paginatedData,
        totalPages: totalPages || 1,
        totalResults: allFiltered.length,
        currentPage
    };
}