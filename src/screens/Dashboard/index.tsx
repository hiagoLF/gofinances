import React from 'react'
import {
    Container, Header, UserWraper, UserInfo, Photo, User,
    UserGreeting, UserName, Icon, HightlightCards,
    Transactions, Title, TransactionsList, LogoutButton
} from './styles'
import { HightlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardData } from '../../components/TransactionCard'

const data: DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: 'Desenvolvimento de site',
        amount: 'R$ 12.000,00',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: '13/04/2020'
    },
    {
        id: '2',
        type: 'negative',
        title: 'Desenvolvimento de site',
        amount: 'R$ 12.000,00',
        category: {
            name: 'Alimentação',
            icon: 'coffee'
        },
        date: '13/04/2020'
    },
    {
        id: '3',
        type: 'negative',
        title: 'Desenvolvimento de site',
        amount: 'R$ 12.000,00',
        category: {
            name: 'Casa',
            icon: 'dollar-sign'
        },
        date: '13/04/2020'
    },
]

export interface DataListProps extends TransactionCardData {
    id: string;
}

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWraper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/39979160?v=4' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Hiago</UserName>
                        </User>
                    </UserInfo>

                    <LogoutButton onPress={() => console.log('Logout')}>
                        <Icon />
                    </LogoutButton>
                </UserWraper>
            </Header>

            <HightlightCards>
                <HightlightCard
                    type='up'
                    title='Entradas'
                    amount='R$ 17.400,00'
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HightlightCard
                    type='down'
                    title='Saídas'
                    amount='R$ 17.400,00'
                    lastTransaction='Última saída dia 13 de abril'
                />
                <HightlightCard
                    type='total'
                    title='Total'
                    amount='R$ 50.800,00'
                    lastTransaction='01 à 16 de Abril'
                />
            </HightlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionsList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}
