import MainLayout from "@/components/MainLayout";
import request, { ApiRequest } from "@/utils/api-request";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

function CameraPage(): JSX.Element {
const {query} = useRouter();
  console.log(query);
  return (
    <>
      <MainLayout>
        {query.id}
      </MainLayout>
    </>
  );
}


export async function getServerSideProps({query}: GetServerSidePropsContext) {
  //todo
  console.log('query - ', query);
  // const respond = await fetch(`https://.../data`)
  const reqestData: ApiRequest = {
    type: 'GET',
    query,
    path: '/camera'
  }
  const res = await request(reqestData) as Object;
  // const data = await res.json()

  // Pass data to the page via props
  return { props: { ...res } }
}

export default CameraPage;
