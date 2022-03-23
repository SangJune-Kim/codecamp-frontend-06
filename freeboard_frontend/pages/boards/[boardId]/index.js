import { gql, useQuery } from "@apollo/client"
import {useRouter} from 'next/router'
import { Wrapper } from '../../../styles/emotion-boardsBoardId'


const FETCH_PRODUCT =gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId:$productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

const DynamicRoutedPage = () =>{
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT,{
        variables: {productId: router.query.productId}
    })
    
    console.log(data)

    return (
      <Wrapper>
        <div>
          <div>

          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </Wrapper>
    );

}

export default DynamicRoutedPage