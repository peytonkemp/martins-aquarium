import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { FishList } from "./fishlist.js"

FishList()