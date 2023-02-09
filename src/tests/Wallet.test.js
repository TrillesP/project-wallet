import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRedux } from './render/renderWithRedux';

test('Testando se a requisição da API é feita corretamente', () => {
    renderWithRedux(<Wallet />);
});

test('Testando adição de despesas na wallet com diferentes moedas e soma de valores', () => {
    renderWithRedux(<Wallet />);
});

test('Testando se, ao adicionar uma despesa, os inputs voltam aos valores default', () => {
    renderWithRedux(<Wallet />);
});

test('Testando botão de editar despesa e se o valor editado é guardado corretamente no estado global', () => {
    renderWithRedux(<Wallet />);
});

test('Testando botão de excluir despesa e se o estado global com todas as despesas é atualizado corretamente', () => {
    renderWithRedux(<Wallet />);
});

test('Testando exclusão de várias despesas e os valores alterando corretamente', () => {
    renderWithRedux(<Wallet />);
});