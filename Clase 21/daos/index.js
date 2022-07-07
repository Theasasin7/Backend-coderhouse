let contenedorProductosAImportar = "ContenedorArchivo";
if (process.env.BASE_DE_DATOS == "firebase") contenedorProductosAImportar = "ContenedorArchivosFirebase";
else if (process.env.BASE_DE_DATOS == "mariadb") contenedorProductosAImportar = "ContenedorArchivosMariaDb";

const contenedor = await import(contenedorProductosAImportar);

export const ContenedorProductos = contenedor;