const filterByRange = ([minRange, maxRange]) => {
    return courses.filter(course => {
        const [minPrice, maxPrice] = course.prices;
        let withinMinRange = true;
        let withinMaxRange = true;

        if (minRange !== null) {
            const minRangeBelowMinPrice = (minPrice === null) ? true : (minRange <= minPrice);

            withinMinRange = minRangeBelowMinPrice;
        }
        
        if (maxRange !== null) {
            const maxRangeAboveMaxPrice = (maxPrice === null) ? true : (maxRange >= maxPrice);
            const minPriceBelowMaxRange = (maxRange === null) ? true : (maxRange >= (minPrice ?? 0));

            withinMaxRange = maxRangeAboveMaxPrice && minPriceBelowMaxRange;
        }
        
        return (withinMinRange && withinMaxRange);
    });
};
