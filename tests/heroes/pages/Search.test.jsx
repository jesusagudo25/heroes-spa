import { render, screen } from "@testing-library/react";
import { Search } from "../../../src/heroes/pages/Search";
import { MemoryRouter } from "react-router-dom";

describe('Test in <Search />', () => { 
    
    test('should display correctly with default values', () => {

        //Primero: renderizar el componente con el MemoryRouter, ya que este componente usa el hook useLocation, que es un hook de react-router-dom... Ademas, se le pasa la propiedad initialEntries con un array que contiene la ruta inicial que se quiere probar, finalmente se renderiza el componente Search y se destructura el container. El container es el contenedor que contiene el componente renderizado.
        const {container} = render(
        <MemoryRouter initialEntries={['/search']}>
            <Search />
        </MemoryRouter>
        );

        //Segundo: se espera que el container sea igual al snapshot, es decir, que el componente se renderizo correctamente. El objetivo de esto es que si en un futuro se hacen cambios en el componente, se pueda comparar con el snapshot y ver si los cambios son correctos.
        expect(container).toMatchSnapshot();
        
    });

    test('should display Batman and the input with the value of the queryString', () => {

        //Primero: renderizar el componente con el MemoryRouter, ya que este componente usa el hook useLocation, que es un hook de react-router-dom... Ademas, se le pasa la propiedad initialEntries con un array que contiene la ruta inicial que se quiere probar, finalmente se renderiza el componente Search y se destructura el container. El container es el contenedor que contiene el componente renderizado.
        const {container} = render(
        <MemoryRouter initialEntries={['/search?q=Batman']}>
            <Search />
        </MemoryRouter>
        );

        //Segundo: se espera que el container sea igual al snapshot, es decir, que el componente se renderizo correctamente. El objetivo de esto es que si en un futuro se hacen cambios en el componente, se pueda comparar con el snapshot y ver si los cambios son correctos.
        //expect(container).toMatchSnapshot();

        //Tercero: se espera que el input tenga el valor de Batman. Se utiliza textbox porque es un input de tipo texto.
        expect(screen.getByRole('textbox').value).toBe('Batman');

        //Cuarto: se espera que la imagen tenga el alt de Batman.
        const img = screen.getByRole('img');
        expect(img.alt).toBe('Batman');

       //screen.debug();
        const heroesCol = screen.getByLabelText('heroes-col'); 
        expect(heroesCol.style.display).toBe('block');
        
    });
 })