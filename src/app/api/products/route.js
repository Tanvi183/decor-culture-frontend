export async function POST(req) {
  try {
    const productData = await req.json();
    
    // Validate required fields
    const requiredFields = ['name', 'price', 'description', 'category', 'image'];
    for (const field of requiredFields) {
      if (!productData[field]) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: `${field} is required` 
          }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful product creation
    const newProduct = {
      id: Date.now(), // Simple ID generation for demo
      ...productData,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    console.log('Product created:', newProduct);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Product created successfully',
        product: newProduct
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Product creation error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Internal server error' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET() {
  // Mock product list endpoint
  return new Response(
    JSON.stringify({
      success: true,
      products: [
        {
          id: 1,
          name: "Sample Product",
          price: 1500,
          category: "decor",
          description: "A sample product for demonstration",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
          createdAt: new Date().toISOString(),
          status: "active"
        }
      ]
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}