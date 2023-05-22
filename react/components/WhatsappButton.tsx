import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string,
  phone: string,
  message: string,
  width: number,
  height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
  const formatMessage = message.replace(/ /g, "%20")
  console.log(formatMessage);


  return (

  <div className='itgloberspartnercl-whatsapp-button-0-x-whatsapp_logo'>
    <a
     href={`https://wa.me/${phone}?text=${formatMessage}`}
     target="_blank"
     rel="noreferrer noopener"
    >
      <img
      src={logo}
      width={width}
      height={height}
      alt="logo de whatsapp" />
    </a>
  </div>

  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "3223508756",
  message: "Estas comunicando con el chat oficial de adidas itg, dejanos sabes tu duda.",
  width: 55,
  height: 55
}

WhatsappButton.schema = {
  title: "Boton de Whatsapp",
  type: "object",
  properties: {
    logo: {
      title: "Logo de WhatsApp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Telefono",
      description: "Agrega por favor del numero de telefono",
      type: "string"
    },
    messsage: {
      title: "Mensaje",
      description: "Agrega por favor el mensaje que se vera para tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "width",
      description: "width logo",
      type: "number"
    },
    height: {
      title: "height",
      description: "height logo",
      type: "number"
    },
  }
}

export default WhatsappButton
