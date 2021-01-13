const fishCollection = [
    {
        img: "https://www.thefactsite.com/wp-content/uploads/2020/04/nemo-facts-nemo.jpg",
        name: "Nemo",
        species:"",
        length:"",
        location:"Anemone",
        diet: "crustaceans"
        
    },
    {
        img: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
        name: "Marlin",
        species:"",
        length:"",
        location:"Anemone",
        diet: "crustaceans"
    },
    {
        img: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        name: "Frank",
        species:"",
        length:"",
        location:"",
        diet: "crustaceans"
    },
    {
        img: "https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?quality=90&resize=940%2C400",
        name: "Larry",
        species:"Gambling Goldfish",
        length:"",
        location:"", 
        diet: "crustaceans"
    },
    {
        img: "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXF1YXJpdW0lMjBmaXNofGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
        name: "Sammy",
        species:"",
        length:"",
        location:"",
        diet: "crustaceans"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}
