import React, { useCallback, useEffect, useState } from 'react'
import {
    Container, Header, UserWraper, UserInfo, Photo, User,
    UserGreeting, UserName, Icon, HightlightCards,
    Transactions, Title, TransactionsList, LogoutButton
} from './styles'
import { HightlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardData } from '../../components/TransactionCard'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { formatDateToBr, formatNumberToReais } from '../../utils/format';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components';

// const data: DataListProps[] = [
//     {
//         id: '1',
//         type: 'positive',
//         name: 'Desenvolvimento de site',
//         amount: 12,
//         category: {
//             name: 'Vendas',
//             icon: 'dollar-sign'
//         },
//         date: '13/04/2020'
//     },
//     {
//         id: '2',
//         type: 'negative',
//         name: 'Desenvolvimento de site',
//         amount: 12,
//         category: {
//             name: 'Alimentação',
//             icon: 'coffee'
//         },
//         date: '13/04/2020'
//     },
//     {
//         id: '3',
//         type: 'negative',
//         name: 'Desenvolvimento de site',
//         amount: 12,
//         category: {
//             name: 'Casa',
//             icon: 'dollar-sign'
//         },
//         date: '13/04/2020'
//     },
// ]

export interface DataListProps extends TransactionCardData {
    id: string;
}

interface HightlightProps {
    amount: string,
    last: string,
}

interface HightlightData {
    entries: HightlightProps,
    expensives: HightlightProps,
    total: HightlightProps,
}

const dataKey = '@gofinances:transactions'

export function Dashboard() {

    const [isLoading, setIsLoading] = useState(true)
    const [transactions, setTransactions] = useState<DataListProps[]>([])
    const [highlightData, setHighlightData] = useState<HightlightData | undefined>(undefined)
    const theme = useTheme()

    async function loadTransactions() {
        const response = await AsyncStorage.getItem(dataKey)
        const transactions = response ? JSON.parse(response) : []
        let entriesTotal = 0
        let expensiveTotal = 0
        const transactionsFormated: DataListProps[] = transactions.map((transaction: DataListProps) => {
            if (transaction.type === 'positive') {
                entriesTotal += Number(transaction.amount)
            } else {
                expensiveTotal += Number(transaction.amount)
            }

            const amount = Number(transaction.amount).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
            const dateFormated = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).format(new Date(transaction.date))

            return {
                id: transaction.id,
                name: transaction.name,
                amount,
                type: transaction.type,
                category: transaction.category,
                date: dateFormated
            }
        })
        setTransactions(transactionsFormated)
        const totalTransactions = entriesTotal - expensiveTotal
        let lastEntryTransactionDate = undefined
        let lastExpendTransactionDate = undefined
        transactionsFormated.forEach(transaction => {
            if (transaction.type === 'positive') { lastEntryTransactionDate = transaction.date }
            if (transaction.type === 'negative') { lastExpendTransactionDate = transaction.date }
        })
        setHighlightData({
            entries: {
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }),
                last: lastEntryTransactionDate
            },
            expensives: {
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                last: lastExpendTransactionDate
            },
            total: {
                amount: totalTransactions.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                last: ''
            }
        })
        setIsLoading(false)
    }

    useEffect(() => {
        // AsyncStorage.removeItem(dataKey)

        loadTransactions()
    }, [])

    useFocusEffect(useCallback(() => { loadTransactions() }, []))

    return (
        <Container>
            {
                isLoading ? (
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        <ActivityIndicator size='large' color={theme.colors.primary} />
                    </View>
                ) : (
                    <>
                        <Header>
                            <UserWraper>
                                <UserInfo>
                                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/39979160?v=4' }} />
                                    <User>
                                        <UserGreeting>Olá, </UserGreeting>
                                        <UserName>Hiago</UserName>
                                    </User>
                                </UserInfo>
                                <GestureHandlerRootView>
                                    <LogoutButton onPress={() => console.log('Logout')}>
                                        <Icon />
                                    </LogoutButton>
                                </GestureHandlerRootView>
                            </UserWraper>
                        </Header>

                        <HightlightCards>
                            <HightlightCard
                                type='up'
                                title='Entradas'
                                amount={highlightData?.entries.amount}
                                lastTransaction={`Última entrada: ${highlightData.entries.last}`}
                            />
                            <HightlightCard
                                type='down'
                                title='Saídas'
                                amount={highlightData?.expensives.amount}
                                lastTransaction={`Última saída: ${highlightData?.expensives.last}`}
                            />
                            <HightlightCard
                                type='total'
                                title='Total'
                                amount={highlightData?.total.amount}
                                lastTransaction='01 à 16 de Abril'
                            />
                        </HightlightCards>

                        <Transactions>
                            <Title>Listagem</Title>

                            <TransactionsList
                                data={transactions}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <TransactionCard data={item} />}
                            />
                        </Transactions>
                    </>
                )
            }

        </Container>
    )
}
