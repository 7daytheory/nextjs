// http://localhost:300/api/users

export async function GET(request) {
    //Handle GET request from /api/users
    //Retireve users from the databse or any data source

    const users = [
        {id: 1 , name: "Matt"},
        {id: 2 , name: "Michele"},
        {id: 3 , name: "Glenn"},
    ]

    //Send the users as a response
    return new Response(JSON.stringify(users));
}



// export async function POST(request: Request) {
    
// }

// export async function PUT(request: Request) {
//    ;
// }

// export async function PATCH(request: Request) {
//     ;
// }

// export async function DELETE(request: Request) {
    
// }

// export async function HEAD(request: Request) {
    
// }

// export async function OPTIONS(request: Request) {
    
// }