$(() => {
  var seleccionados = localStorage.getItem('productosseleccionados')?.split(',') ?? [];
  toogleProductos();

  $('.producto').on('click', (e) => {
    const producto = $(e.currentTarget).attr('id');
    if (seleccionados.includes(producto)) {
      seleccionados = seleccionados.filter((p) => p != producto);
    } else {
      seleccionados.push(producto);
    }
    toogleProductos();
    !!seleccionados.length ? localStorage.setItem('productosseleccionados', seleccionados) : localStorage.removeItem('productosseleccionados');
  });

  $('#botoncarrito').on('click', (e) => {
    e.preventDefault();
    $('#carrito').empty();
    seleccionados.forEach((producto) => {
      $('#carrito').append(`<div class="col"><img src="imgs/${producto}.png" alt="${producto}" class="card-img-top"></div>`);
    });
  });

  function toogleProductos() {
    $('.producto').addClass('opacity-75');
    seleccionados.forEach((producto) => {
      $(`#${producto}`).removeClass('opacity-75');
    })
  }
});