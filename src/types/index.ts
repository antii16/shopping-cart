export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// Herencia de Guitar
export type CartItem = Guitar & {
    quantity: number
}

// UTILITY TYPES
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

