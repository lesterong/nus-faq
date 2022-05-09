const base = {
  btn: 'transition-colors duration-100 text-sm rounded-lg py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0',
  checkbox: 'appearance-none h-3 w-3 rounded-sm border',
  textInput: 'border-b focus:outline-none',
  item: 'p-3 flex w-full items-center place-content-between text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0',
  sidebarBtn: 'shrink-0 text-left px-2 md:px-6 py-1 md:py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50',
};

const cs = {
  bgColor: 'bg-cs',
  textColor: 'text-cs',
  btnStyle: `${base.btn} bg-cs/20 hover:bg-cs/30 active:bg-cs/40 focus-visible:border-cs`,
  checkboxStyle: `${base.checkbox} checked:bg-cs`,
  textInputStyle: `${base.textInput} focus-visible:border-cs`,
  highlightColor: 'bg-cs/30',
  contentStyle: 'cs-content',
  itemStyle: `${base.item} focus-visible:ring-cs`,
  sidebarBtnStyle: `${base.sidebarBtn} focus-visible:ring-cs`,
  svgColor: 'fill-cs',
  logoPosX: '8',
};

const home = {
  bgColor: 'bg-default',
  textColor: 'text-default',
  btnStyle: `${base.btn} bg-default/20 hover:bg-default/30 active:bg-default/40 focus-visible:border-default`,
  checkboxStyle: `${base.checkbox} checked:bg-default`,
  textInputStyle: `${base.textInput} focus-visible:border-default`,
  highlightColor: 'bg-default/30',
  contentStyle: '',
  itemStyle: '',
  sideBarBtnStyle: '',
  svgColor: 'fill-default',
  logoPosX: '',
};

const styleScheme = { cs, home };

export default styleScheme;
