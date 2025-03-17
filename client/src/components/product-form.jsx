import { Input } from "antd"
import { useState } from "react"
import { useProductStore } from "../store/useProducts"


export function ProductForm() {
    const {add: createProduct} = useProductStore()
    const [state, setState] = useState({
        name: null,
        price: 0,
        stock: 0,
    })
    
    // const handleSubmit =async (e) => {
    //     e.preventDefault()
    //     const response = await createProduct(state)
    //     if(response)
    // }

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="py-2">
                    <label>
                        <span className="font-normal">Product Name</span>
                    </label>
                    <Input
                        type="text"
                        placeholder="Enter name"
                        required
                        value={state.name}    
                        onChange={(e) => setState({ ...state, name: e.target.value })}
                    />
                </div>
                <div className="py-2">
                    <label>
                        <span className="font-normal">Price</span>
                    </label>
                    <Input
                        min="0"
                        step="0.01"
                        required
                        value={state.price}
                        onChange={(e) => setState({ ...state, price: e.target.value })}
                        type="number"
                        placeholder="Enter price"

                    />
                </div>
                <div className="py-2">
                    <label>
                        <span className="font-normal">Stock</span>
                    </label>
                    <Input
                        type="number"
                        req
                        placeholder="Enter stock"
                        value={state.stock}
                        onChange={(e) => setState({ ...state, stock: e.target.value })}
                    />  
                </div>
            </form>
        </div>
    )
}