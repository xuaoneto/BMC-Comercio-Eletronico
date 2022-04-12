import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const bmc = [
    {
      title: "parcerias",
      bg: "#ffe59a",
      content: [
        "Correios.",
        "Contador.",
        "Carro de som.",
        "Freelancer de Marketing Digital.",
      ],
      gridArea: "1 / 1 / 5 / 3",
    },
    {
      title: "atividades",
      bg: "#ffe59a",
      metric: "10px",
      content: [
        "Tirar fotos de produtos para o site e instagram.",
        "Gestão Financeira da Empresa.",
        "Entregas nos Correios.",
        "Coleta de pets nas casas e entrega dos mesmos.",
      ],
      gridArea: "1 / 3 / 3 / 5",
    },
    {
      title: "recursos",
      bg: "#ffe59a",
      content: [
        "Plataforma de E-commerce.",
        "Loja física.",
        "Func. de Atendimento.",
        "Func. Operador de caixa.",
      ],
      gridArea: "3 / 3 / 5 / 5",
    },
    {
      title: "proposta de valor",
      bg: "#c59ee3",
      content: [
        "Produtos de alta qualidade e inovadores.",
        "Dificencial, os pets serão pegos na casa dos clientes, e após o serviço, serão deixados lá também, ou seja, o cliente não precisa ir a loja para contratar serviços para seus pets.",
      ],
      gridArea: "1 / 5 / 5 / 7",
    },
    {
      title: "relacionamento",
      bg: "#01aded",
      content: [
        "Cartão fidelidade.",
        "Divulgações de serviços e publicações de novos produtos no instagram.",
        "Envio de promoções para o email dos clientes.",
      ],
      gridArea: "1 / 7 / 3 / 9",
    },
    {
      title: "canais",
      bg: "#01aded",
      content: [
        "E-Commerce.",
        "Carros de som.",
        "Redes Sociais.",
        "Loja física.",
      ],
      gridArea: "3 / 7 / 5 / 9",
    },
    {
      title: "clientes",
      bg: "#01aded",
      content: [
        "São pessoas em busca de acessórios para seus pets.",
        "Pessoas em busca de praticidade para cuidar dos seus pets.",
      ],
      gridArea: "1 / 9 / 5 / 11",
    },
    {
      title: "estrutura de custos",
      bg: "#c89193",
      content: [
        "R$ 350,00 - Custo MENSAL com Contador",
        "R$ 500,00 - Gasolina para deslocamentos",
        "R$ 2000,00 - Aluguel de um lugar para loja",
        "R$ 3000,00 - Custo Mensal Funcionarios",
        "R$ 4000,00 - Custo de compra de produtos para revenda",
      ],
      metric: "10px",
      gridArea: "5 / 1 / 7 / 6",
    },
    {
      title: "fontes de receita",
      bg: "#9db18f",
      content: [
        "Venda de acessórios.",
        "Serviços de tosa, banho, corte de unhas de pets, etc.",
        "Venda de medicamentos para animais.",
      ],
      gridArea: "5 / 6 / 7 / 11",
    },
  ];
  return (
    <>
      <Head>
        <title>BMC</title>
        <meta name="description" content="BMC" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Grid
        w="100%"
        h="100vh"
        bg="#fff"
        gap={{ base: "15px", "2xl": "20px" }}
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(6, 1fr)"
        p={{ base: "15px", "2xl": "20px" }}
      >
        {bmc.map((item, index) => {
          return (
            <Box
              p={{ base: "15px 25px", "2xl": "25px" }}
              key={`bmc-${index}`}
              bg={item.bg}
              gridArea={item.gridArea}
              borderRadius="15px"
              boxShadow="0 0 1em rgba(0,0,0, 0.3)"
              transition="all .4s ease"
              _hover={{
                boxShadow: "0 0 1em rgba(0,0,0, 0.7)",
              }}
            >
              <Text
                fontSize={{ base: "18", "2xl": "25" }}
                fontWeight="bold"
                textTransform="uppercase"
              >
                {item.title}
              </Text>
              <Stack
                mt={{ base: "15px", "2xl": "20px" }}
                spacing={{
                  base: item.metric ? item.metric : "15px",
                  "2xl": "20px",
                }}
                lineHeight={{
                  base: item.metric ? "15px" : null,
                  "2xl": "20px",
                }}
              >
                {item.content.map((content) => {
                  return (
                    <Grid
                      key={`${Math.random() * (9999999 - 0) + 0}`}
                      templateColumns="16px auto"
                    >
                      <Box mt={{ base: "-4px", "2xl": "-2px" }}>
                        <CheckIcon />
                      </Box>

                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "13", "2xl": "17" }}
                        ml="13px"
                      >
                        {content}
                      </Text>
                    </Grid>
                  );
                })}
              </Stack>
            </Box>
          );
        })}
      </Grid>
    </>
  );
}
