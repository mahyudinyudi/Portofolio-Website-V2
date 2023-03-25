var keywords = [
  'mahyudin',
  'Mahyudin',
  'MAHYUDIN',
  'mahyudinyudi',
  'Mahyudinyudi',
  'yudi Portfolio',
  'yudi portfolio',
  'Mahyudin Portfolio',
  'mahyudin portfolio',
  'yudi Web',
  'yudi web',
  'Mahyudin Web',
  'mahyudin web',
  'Mahyudin Web Portfolio',
  'mahyudin web portfolio',
  'Mahyudin Web Portfolio',
  'mahyudin web portfolio',
  'mahyudin yudi',
  'mahyudin app',
  'yudi web',
  'yudi portofolio',
  'yudi web portofolio',
  'Yudi Web',
  'Yudi Portofolio',
  'Yudi Web Portofolio',
  'yudi portfolio',
  'yudi web portfolio',
  'portofolio yudi',
  'web yudi',
  'portofolio web yudi',
  'yudi programmer',
  'mahyudin programer',
];
//var html = '<meta name="keywords" content="';
var html = '';
for (var i = 0; i < keywords.length; i++) {
  var separator = i < keywords.length - 1 ? ', ' : '';
  html += keywords[i] + separator;
}
//tmll += '">';
//console.log(html);
document.querySelector('meta[name="keywords"]').setAttribute('content', html);
