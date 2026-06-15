export const converterArquivosParaBase64 = async (filesList) => {
    const files = Array.from(filesList || []);

    const arquivosConvertidos = await Promise.all(
        files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = () => {
                    resolve({
                        ARQUIVOBASE64: reader.result.split(',')[1],
                        NOMEARQUIVO: file.name,
                        TIPOARQUIVO: file.type
                    });
                };

                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        })
    );

    return arquivosConvertidos;
};