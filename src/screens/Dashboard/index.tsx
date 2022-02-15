import React from 'react'
import { Container, Header, UserWraper, UserInfo, Photo, User, UserGreeting, UserName, Icon, HightlightCards } from './styles'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { HightlightCard } from '../../components/HighlightCard'

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

                    <Icon />
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
        </Container>
    )
}
