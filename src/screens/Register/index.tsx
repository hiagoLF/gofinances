import React, { useState } from 'react';
import Button from '../../components/Forms/Button';
import { CategorySelect } from '../../components/Forms/CategorySelect';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

export const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState('')

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />

          <TransactionTypes>
            <TransactionTypeButton
              title='Income'
              type='up'
              onPress={() => setTransactionType('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              title='Outcome'
              type='down'
              onPress={() => setTransactionType('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>

          <CategorySelect title='Categoria'/>
        </Fields>

        <Button title='Enviar' />
      </Form>
    </Container>
  )
}