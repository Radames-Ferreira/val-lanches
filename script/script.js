function fazerPedido(mensagem) {
  const numero = "5511987395327";
  const texto = encodeURIComponent(mensagem);
  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
}
