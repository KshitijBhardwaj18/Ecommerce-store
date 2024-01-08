import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;


const HomePage  = async () => {
    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard("f8ec2aeb-c854-456b-b5d2-fb9a2001f008");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>

        
        </Container>
    )
}

export default HomePage;