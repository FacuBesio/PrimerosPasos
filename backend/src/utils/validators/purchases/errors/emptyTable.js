const emptyTable = () => {
    return {
        totalResults: 0,
        totalPages: 0,
        currentPage: 0,
        pageSize: 0,
        purchases: [],
        message: `No se ha encontrado ninguna Compra registrada en la base de datos`,
    }

};

module.exports = emptyTable;