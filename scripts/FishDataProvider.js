const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans"
    },
    {
        name: "David",
        food: "crustaceans"
    },
    {
        name: "Frank",
        food: "crustaceans"
    },
    {
        name: "Bill",
        food: "crustaceans"
    },
    {
        name: "Sammy",
        food: "crustaceans"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}
