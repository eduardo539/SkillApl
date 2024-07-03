/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');


const APL_DOCUMENTS = {
    "APLBienvenida": {
        id: "APLBienvenida",
        datasource: {
            "headlineTemplateData": {
                "type": "object",
                "objectId": "headlineSample",
                "properties": {
                    "backgroundImage": {
                        "contentDescription": null,
                        "smallSourceUrl": null,
                        "largeSourceUrl": null,
                        "sources": [
                            {
                                "url": "https://img2.wallspic.com/previews/8/5/6/8/3/138658/138658-desenfoque-x750.jpg",
                                "size": "large"
                            }
                        ]
                    },
                    "textContent": {
                        "primaryText": {
                            "type": "PlainText",
                            "text": "Bienvenido Eduardo, Para comenzar puedes decir, Dame información cultural de oaxaca, En que puedo ayudarte?"
                        }
                    },
                    "logoUrl": "https://images.vexels.com/content/234934/preview/bienvenido-classic-badge-banner-da8e91.png",
                    "hintText": "PRACTICA 1"
                }
            }
        }
    },
    "APLError": {
        id: "APLError",
        datasource: {
            "headlineTemplateData": {
                "type": "object",
                "objectId": "headlineSample",
                "properties": {
                    "backgroundImage": {
                        "contentDescription": null,
                        "smallSourceUrl": null,
                        "largeSourceUrl": null,
                        "sources": [
                            {
                                "url": "https://us.123rf.com/450wm/elovich/elovich2003/elovich200300397/141387204-bokeh-de-fondo-abstracto-resplandor-de-brillo.jpg?ver=6",
                                "size": "large"
                            }
                        ]
                    },
                    "textContent": {
                        "primaryText": {
                            "type": "PlainText",
                            "text": "Disculpa, No entiendo lo que dices, vuelve a intentarlo."
                        }
                    },
                    "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
                    "hintText": "Error"
                }
            }
        }
    },
    "APLAyuda": {
        id: "APLAyuda",
        datasource: {
            "headlineTemplateData": {
                "type": "object",
                "objectId": "headlineSample",
                "properties": {
                    "backgroundImage": {
                        "contentDescription": null,
                        "smallSourceUrl": null,
                        "largeSourceUrl": null,
                        "sources": [
                            {
                                "url": "https://us.123rf.com/450wm/supernam/supernam1005/supernam100500201/7038683-fondo-de-defocused-claro-abstracta.jpg?ver=6",
                                "size": "large"
                            }
                        ]
                    },
                    "textContent": {
                        "primaryText": {
                            "type": "PlainText",
                            "text": "Puedes decir dame información de oaxaca! En que puedo ayudarte?"
                        }
                    },
                    "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
                    "hintText": ""
                }
            }
        }
    },
    "APLBye": {
        id: "APLBye",
        datasource: {
            "headlineTemplateData": {
                "type": "object",
                "objectId": "headlineSample",
                "properties": {
                    "backgroundImage": {
                        "contentDescription": null,
                        "smallSourceUrl": null,
                        "largeSourceUrl": null,
                        "sources": [
                            {
                                "url": "https://us.123rf.com/450wm/kip02kas/kip02kas2209/kip02kas220900007/193942624-fondo-borroso-de-las-luces-de-la-ciudad-nocturna-tr%C3%A1fico.jpg?ver=6",
                                "size": "large"
                            }
                        ]
                    },
                    "textContent": {
                        "primaryText": {
                            "type": "PlainText",
                            "text": "Hasta pronto, Que tengas un Excelente día."
                        }
                    },
                    "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
                    "hintText": "Hasta pronto"
                }
            }
        }
    },
    "APLComidas": {
        id: "APLComidas",
        datasource: {
            "imageListData": {
                "type": "object",
                "objectId": "imageListSample",
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2023/05/Vista-de-Restaurante-en-Oaxaca--e1692083338934.jpg?w=700&ssl=1",
                            "size": "large"
                        }
                    ]
                },
                "title": "Platillos tipicos de OAXACA",
                "listItems": [
                    {
                        "primaryText": "Tamales oaxaqueños",
                        "imageSource": "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2023/05/Tamales-Oaxaquenos--e1692083276991.jpg?w=700&ssl=1"
                    },
                    {
                        "primaryText": "Mole negro",
                        "imageSource": "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2023/05/Mole-Negro-1-e1692083256121.jpg?w=700&ssl=1"
                    },
                    {
                        "primaryText": "Chapulines",
                        "imageSource": "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2023/05/Chapulines-1-e1692083216738.jpg?w=700&ssl=1"
                    },
                    {
                        "primaryText": "Chile de agua relleno",
                        "imageSource": "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2023/05/Chile-de-agua-relleno-1-e1692083236320.jpeg?w=600&ssl=1"
                    },
                    {
                        "primaryText": "Tlayudas",
                        "imageSource": "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2023/05/Tlayudas-1-e1692083318966.jpg?w=700&ssl=1"
                    }
                ],
                "logoUrl": "",
                "hintText": "Top 5 mejores platillos de oaxaca"
            }
        }
    },
    "APLSitiosTuristicos": {
        id: "APLSitiosTuristicos",
        datasource: {
            "cardsLayoutTemplateData": {
                "type": "object",
                "properties": {
                    "backgroundImage": "https://blog.vivaaerobus.com/wp-content/uploads/2020/03/Lugares-para-visitar-en-Oaxaca.jpg",
                    "headerTitle": "",
                    "headerSubtitle": "",
                    "headerAttributionImage": "",
                    "primaryText": "Sitios turísticos de oaxaca",
                    "listItems": [
                        {
                            "primaryText": "Monte Albán",
                            "secondaryText": "Testigo de la Grandeza Zapoteca",
                            "thumbnailImage": "https://image-tc.galaxy.tf/wijpeg-2vtauzjeh6bgad60u45txlopa/monte-alban_standard.jpg?crop=356%2C0%2C1088%2C816&width=1400"
                        },
                        {
                            "primaryText": "Hierve el Agua",
                            "secondaryText": "Maravilla Natural en las Alturas",
                            "thumbnailImage": "https://cdn.prod.website-files.com/65733718fa3b548b94b6507a/65c4f680f0f48d39b2a86ba6_Panoramica-de-la-parte-de-arriba-del-lugar.webp"
                        },
                        {
                            "primaryText": "Ciudad de Oaxaca",
                            "secondaryText": "El Pasado se Fusiona con el Presente",
                            "thumbnailImage": "https://s.yimg.com/ny/api/res/1.2/JzkIutM65In8Y3RFKGzFEQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2023-07/05402a60-22aa-11ee-a7ff-c68ea0e1c356"
                        },
                        {
                            "primaryText": "Teotitlán del Valle",
                            "secondaryText": "Tejiendo Tradiciones",
                            "thumbnailImage": "https://www.packing-up-the-pieces.com/wp-content/uploads/2021/11/Teotitlan_del_Valle_Church.jpg"
                        },
                        {
                            "primaryText": "Mitla",
                            "secondaryText": "El Lugar de los Muertos",
                            "thumbnailImage": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/72/9d/ec/entrada-a-la-zona-arquelogica.jpg?w=500&h=400&s=1"
                        },
                        {
                            "primaryText": "Bahías de Huatulco",
                            "secondaryText": "Paraíso en la Costa Oaxaqueña",
                            "thumbnailImage": "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2021/11/agua-blanca.jpg?fit=1280%2C813&ssl=1"
                        }
                    ]
                }
            }
        }
    },
    "APLTrajesTipicos": {
        id: "APLTrajesTipicos",
        datasource: {
            "gridListData": {
                "type": "object",
                "objectId": "gridListSample",
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://blob.zonatresite.com/images/2021/07/09/oax-focus-0-0-640-384.png",
                            "size": "small",
                            "widthPixels": 0,
                            "heightPixels": 0
                        },
                        {
                            "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                            "size": "large",
                            "widthPixels": 0,
                            "heightPixels": 0
                        }
                    ]
                },
                "title": "Trajes típicos por regiones de Oaxaca",
                "listItems": [
                    {
                        "primaryText": "San Bartolo Coyotepec",
                        "imageSource": "https://imagenes.muyinteresante.com.mx/uploads/2023/05/31/64778b391b98c.gif"
                    },
                    {
                        "primaryText": "La danza de la pluma",
                        "imageSource": "https://imagenes.muyinteresante.com.mx/uploads/2023/05/31/64778b3b89250.gif"
                    },
                    {
                        "primaryText": "Pinotepa Nacional",
                        "imageSource": "https://imagenes.muyinteresante.com.mx/uploads/2023/05/31/64778b3d25ff6.gif"
                    },
                    {
                        "primaryText": "Ejutla de Crespo",
                        "imageSource": "https://imagenes.muyinteresante.com.mx/files/vertical_image_670/uploads/2023/05/31/64778b3e9c9f4.jpeg"
                    },
                    {
                        "primaryText": "Huautla de Jiménez",
                        "imageSource": "https://imagenes.muyinteresante.com.mx/files/vertical_image_670/uploads/2023/05/31/64778b3fcc522.jpeg"
                    },
                    {
                        "primaryText": "La malacatera de Jamiltepec",
                        "imageSource": "https://imagenes.muyinteresante.com.mx/files/vertical_image_670/uploads/2023/05/31/64778b41133ba.jpeg"
                    }
                ],
                "logoUrl": ""
            }
        }
    },
    "APLPersonajesImportantes": {
        id: "APLPersonajesImportantes",
        datasource: {
            "cardsLayoutTemplateData": {
                "type": "object",
                "properties": {
                    "backgroundImage": "https://cdn.milenio.com/uploads/media/2021/04/01/oaxaca-georeferencio-su-riqueza-cultural_80_0_1085_675.jpeg",
                    "headerTitle": "Personajes Sobresalientes de Oaxaca",
                    "headerSubtitle": "",
                    "headerAttributionImage": "",
                    "primaryText": "Artistas en Santa Lucía del Camino, Oaxaca",
                    "listItems": [
                        {
                            "primaryText": "Arnulfo Aquino Casas",
                            "secondaryText": "Artes plásticas",
                            "thumbnailImage": "https://sic.cultura.gob.mx/images/29146"
                        },
                        {
                            "primaryText": "Francisco Guevara Contreras",
                            "secondaryText": "Artes plásticas",
                            "thumbnailImage": "https://sic.cultura.gob.mx/images/29788"
                        },
                        {
                            "primaryText": "Prometeo Alejandro Sánchez Islas",
                            "secondaryText": "Literatura",
                            "thumbnailImage": "https://sic.cultura.gob.mx/imagenes_cache/artista_4276_i_51078.png"
                        },
                        {
                            "primaryText": "Max Sánchez López",
                            "secondaryText": "Artes plásticas",
                            "thumbnailImage": "https://sic.cultura.gob.mx/galeria_imagen/592d9d5aca112max_sanz_4.jpg"
                        },
                        {
                            "primaryText": "Xavier Ambrocio Santos",
                            "secondaryText": "Artes plásticas",
                            "thumbnailImage": "https://sic.cultura.gob.mx/images/30712"
                        },
                        {
                            "primaryText": "Edgar Salinas Martínez",
                            "secondaryText": "Artes plásticas",
                            "thumbnailImage": "https://sic.cultura.gob.mx/images/29784"
                        }
                    ]
                }
            }
        }
    },
    APLVideo: {
        id: "APLVideo",
        datasource: {
            "videoPlayerTemplateData": {
                "type": "object",
                "properties": {
                    "backgroundImage": "https://elheraldodeveracruz.com.mx/images/2024/MARZO/27/7bbge3r5.jpeg",
                    "displayFullscreen": true,
                    "headerTitle": "Costumbres y tradiciones de Oaxaca",
                    "headerSubtitle": "",
                    "logoUrl": "",
                    "videoControlType": "jump10",
                    "videoSources": [
                        "https://paraoaxaca.s3.us-east-2.amazonaws.com/TRADICIONES+OAXACA.mp4"
                    ],
                    "sliderType": "determinate"
                }
            }
        }
    },
    APLAudio: {
        id: "APLAudio",
        datasource: {
            "audioPlayerTemplateData": {
                "type": "object",
                "properties": {
                    "audioControlType": "jump10",
                    "audioSources": [
                        "https://paraoaxaca.s3.us-east-2.amazonaws.com/M%C3%BAsica+Regional+de+Oaxaca+-+-La+Sandunga-+(128+kbps).mp3"
                    ],
                    "backgroundImage": "https://media.admagazine.com/photos/618a6737a9f7fab6f0622ef6/16:9/w_2992,h_1683,c_limit/66143.jpg",
                    "coverImageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtV8XAu3cDFhEd5vRC4RO3P7qttqVXCBYfQQ&s",
                    "headerTitle": "Musica tipica de oaxaca",
                    "logoUrl": "",
                    "primaryText": "La sandunga",
                    "secondaryText": "Musica tradicional",
                    "sliderType": "determinate"
                }
            }
        }
    }
};



const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    };
};


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido Eduardo, Para comenzar puedes decir, Dame información cultural de oaxaca, En que puedo ayudarte?';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLBienvenida.id, APL_DOCUMENTS.APLBienvenida.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const ComidaOaxacaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaOaxacaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Estos son los platillos tipicos de oaxaca!';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLComidas.id, APL_DOCUMENTS.APLComidas.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const TrajesTipicosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajesTipicosIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Estos son los trajes tradicionales de oaxaca!';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLTrajesTipicos.id, APL_DOCUMENTS.APLTrajesTipicos.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const SitiosTuristicosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SitiosTuristicosIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Estos son los mejores sitios turisticos de oaxaca!';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLSitiosTuristicos.id, APL_DOCUMENTS.APLSitiosTuristicos.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const PersonajesFamososIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesFamososIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Estos son los artistas o personajes sobresalientes de oaxaca!';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLPersonajesImportantes.id, APL_DOCUMENTS.APLPersonajesImportantes.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const InformacionOaxacaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InformacionOaxacaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Te muestro un video y algo de información, Oaxaca constituye una gran variedad de ecosistemas y biodiversidad, mismos que van desde maravillosas playas, hasta increíbles montañas, valles, praderas, bosques y selvas, que vuelven único al estado y que gracias a ello logra complacer cualquier tipo de preferencia.';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLVideo.id, APL_DOCUMENTS.APLVideo.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const MusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aqui tienes la musica tradicional o tipica de oaxaca';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLAudio.id, APL_DOCUMENTS.APLAudio.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes decir dame información de oaxaca! En que puedo ayudarte?';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLAyuda.id, APL_DOCUMENTS.APLAyuda.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Hasta pronto, Que tengas un Excelente día!';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLBye.id, APL_DOCUMENTS.APLBye.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Disculpa, No entiendo lo que dices, vuelve a intentarlo.`;
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(APL_DOCUMENTS.APLError.id, APL_DOCUMENTS.APLError.datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Disculpa, No entiendo lo que dices, vuelve a intentarlo.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        ComidaOaxacaIntentHandler,
        SitiosTuristicosIntentHandler,
        TrajesTipicosIntentHandler,
        PersonajesFamososIntentHandler,
        InformacionOaxacaIntentHandler,
        MusicaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();