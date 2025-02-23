import { Categories, Container, Filters, ProductCard, ProductGroupList, SortPoput, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold"/>

      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
              <Filters />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList 
                title="Піца" 
                items={[{
                   id: 0, 
                   name: 'Піца курча BBG', 
                   items: [{price: 120}], 
                   imageUrl: "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44033%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75"
                },
                {
                  id: 0, 
                  name: 'Піца курча BBG', 
                  items: [{price: 120}], 
                  imageUrl: "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44033%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75"
               },
               {
                id: 0, 
                name: 'Піца курча BBG', 
                items: [{price: 120}], 
                imageUrl: "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44033%2Fconversions%2Ftext-optimized.jpg&w=1080&q=75"
             }
              ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
