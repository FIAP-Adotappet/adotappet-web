import React from 'react';
import {render} from '@testing-library/react'
import '../../components/navbar'
import Navbar from '../../components/navbar'

describe("Navbar component",() => {
  test('Deve renderizar corretamente', () => {
    const { getByText} = render( <Navbar />);

    expect(getByText("Cadastre-se")).toBeInTheDocument()
    expect(getByText("Sobre nós")).toBeInTheDocument()
    expect(getByText("Adoção")).toBeInTheDocument()
    expect(getByText("Contato")).toBeInTheDocument()     
  });


} );



