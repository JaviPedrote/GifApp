import { renderHook, waitFor } from '@testing-library/react';
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

describe('probando el usewFetchGifs', () => { 

    test('debe de retornar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images , isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBe(true);        
       
    });

    test('debe de retornar un arreglo de imagenes y el isLoadfing en false', async() => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        expect( result.current.images.length).toBeGreaterThan(0);
        expect( result.current.isLoading ).toBe(false);        
       
    });
    

 })