import React from 'react'
import Container from '../../../components/Container'
import Delivery from '../../../assets/Delivery.svg'
import Star from '../../../assets/Star.svg'
import Shield from '../../../assets/ShieldCheck.svg'
import FeatureItem from './FeatureItem'

const Feature = () => {
  return (
    <Container>
      <div className='w-full items-center gap-10 md:mt-20 flex flex-col md:flex-row justify-between px-0 xl:px-20 2xl:px-40'>
        <FeatureItem icon={Delivery} title={"Frete Grátis"} description={"Atualize seu estilo hoje e ganhe frete GRÁTIS em todos os pedidos! Não perca."} />
        <FeatureItem icon={Star} title={"Satisfação Garantida"} description={"Compre com confiança com nossa Garantia de Satisfação: ame ou receba um reembolso."} />
        <FeatureItem icon={Shield} title={"Pagamento Seguro"} description={"Sua segurança é nossa prioridade. Seus pagamentos estão seguros conosco."} />
      </div>


    </Container>
  )
}

export default Feature