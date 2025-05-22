import connectToDB from '@/lib/db/mongoose'
import Product from '@/lib/db/models/product.model'

const product = [
    {
        productId:1,
        productName:'Semaglutide 4 mg',
        productImage:[
            {
                thumb: '/assets/product-image/thumb/sema-4-mg-7-thumb.webp',
                large: '/assets/product-image/sema-4-mg-7.webp'
            },
            {
                thumb: '/assets/research/semaglutide_research.webp',
                large: '/assets/research/semaglutide_research.webp'
            },
            {
                thumb: '/assets/research/semaglutide_research_2.webp',
                large: '/assets/research/semaglutide_research_2.webp'
            },
        ],
        metaDescription: '',
        productPrice: 499.00,
        slug:'semaglutide-g-4mg-pen',
        description: '',
        salas:0
    },
    {
        productId:2,
        productName:'Retatrutide 4Mg Pen',
        productImage:[
            {
                thumb: '/assets/product-image/thumb/reta-7-thumb.webp',
                large: '/assets/product-image/reta-7.webp'
            },
            {
                thumb: '/assets/research/retartrutide.webp',
                large: '/assets/research/retartrutide.webp'
            },
            {
                thumb: '/assets/research/retartrutide_2.webp',
                large: '/assets/research/retartrutide_2.webp'
            },
        ],
        metaDescription: '',
        productPrice: 499.00,
        slug:'retatrutyd-4mg-pen',
        description: '',
        salas:0
    },
    {
        productId:3,
        productName:'SemA + CAGRI PEN 2 + 2 MG',
        productImage:[
            {
                thumb: '/assets/product-image/thumb/semacagri-pen-7-thumb.webp',
                large: '/assets/product-image/semacagri-pen-7.webp'
            },
            {
                thumb: '/assets/research/sema+cargi.webp',
                large: '/assets/research/sema+cargi.webp'
            },
            {
                thumb: '/assets/research/sema+cargi_2.webp',
                large: '/assets/research/sema+cargi_2.webp'
            },
        ],
        metaDescription: '',
        productPrice: 499.00,
        slug:'sema-cagri-2+2mg-pen',
        description: '',
        salas:0
    },
]

export const populateDB = async () => {
    try {
      await connectToDB();   
      await Product.insertMany(product);
      console.log('Database populated successfully!');
    } catch (error) {
      console.error('Error populating database:', error);
    }
};
  
export const getProducts = async  () => {
    try {
        await connectToDB()
        const products = await Product.find();        
        if(!products) return null;
        return {message:'ok',data:products};
    } catch (error) {
        console.log('Error fetching products: ',error);
    }
}

export const getProduct = async (slug) => {
    if(!slug) return "Please Provide Product Slug"
    try {
        connectToDB()
        console.log(slug);
        
        const product = await Product.findOne({slug:slug});
        console.log("ABC ",product)
        if(!product) return {message:'No Product Found', data:null}
        return {message: 'ok', data:product}
    } catch (error) {
        console.log("Error Fetching Product: ",error);
    }
}


