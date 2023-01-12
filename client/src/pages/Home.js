import { useEffect, useState, useCallback } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImageViewer from 'react-simple-image-viewer';


const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'https://www.guiarepsol.com/content/dam/repsol-guia/contenidos-imagenes/comer/en-el-mercado/diccionario-para-entender-el-cultivo-del-platano-de-canarias/gr-cms-media-featured_images-none-166c80dd-1497-4658-9580-d3bd043aa27a-apertura.jpg',
    'https://imag.bonviveur.com/platanos-en-distintos-puntos-de-maduracion.jpg',
    'https://fagro.mx/img/cultivos/papaya.png',
    'https://exoticfruitbox.com/wp-content/uploads/2015/10/papaya-3-Exotic.jpg'
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
     
    return (
    <>
    
    

<div className="divRegistroyimagenes">
    <div className="imgRegistroDiv">
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>

   
    <div className="formDiv">
    <h1 className="tituloRegistro">Registro de nuevos clientes</h1>
    <Form  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu email con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name*</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Escribe aquí tu nombre o el de tu empresa
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="surname" placeholder="Enter surname" />
        <Form.Text className="text-muted">
          Escribe aquí tu apellido o apellidos(Déjalo en blanco si eres una empresa)
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Número de identificación fiscal (DNI o CIF)*</Form.Label>
        <Form.Control type="surname" placeholder="Enter DNI o CIF" />
        <Form.Text className="text-muted">
          Escribe aquí tu ID
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     <p> * Campos obligarorios</p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Acepto la política de privacidad" />
      </Form.Group>
      
      <Button className="buttonRegistro" variant="primary" type="submit">
        Registrarme
      </Button>
     
    </Form>

    </div>
    <div className="imgRegistroDiv">
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
    </div>
    </>
    );
  };
  
  export default Home;