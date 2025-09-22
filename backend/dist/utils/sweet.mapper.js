export function toSweetDto(sweet) {
    return {
        id: sweet._id.toString(),
        name: sweet.name,
        category: sweet.category,
        price: sweet.price,
        image: sweet.image,
        quantity: sweet.quantity,
    };
}
//# sourceMappingURL=sweet.mapper.js.map