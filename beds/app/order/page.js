import Order from "./Order";

import { metaData } from "@/utils/metadata";

export const metadata = metaData('Как да поръчам')

export default function Page() {
  return (
    <Order></Order>
  )
}