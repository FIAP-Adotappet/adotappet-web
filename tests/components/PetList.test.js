import React from 'react';
import {render} from '@testing-library/react'
import '../../components/navbar'
import Petlist from '../../components/petList'

describe("Petlist component",() => {
  test('Deve renderizar corretamente', () => {
    const { getByText} = render( <Petlist />);

    expect(getByText("Pets para adoção")).toBeInTheDocument()
    expect(getByText("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.")).toBeInTheDocument()
     
  });


} );