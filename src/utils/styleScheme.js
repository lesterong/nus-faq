const base = {
  btnPrimary: 'transition-colors duration-100 text-sm rounded-lg py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0',
  btnSecondary: 'transition-colors duration-100 text-sm rounded-lg py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0 border bg-white border-black',
  checkbox: 'appearance-none h-3 w-3 rounded border focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0',
  textInput: 'border-b focus:outline-none',
  item: 'p-3 flex w-full items-center place-content-between text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0',
  sidebarBtn: 'shrink-0 text-left px-2 md:px-6 py-1 md:py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50',
  editorBtn: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 rounded-md',
};

const cs = {
  bgColor: 'bg-cs',
  textColor: 'text-cs',
  btnPrimaryStyle: `${base.btnPrimary} bg-cs/20 hover:bg-cs/30 active:bg-cs/40 focus-visible:ring-cs`,
  btnSecondaryStyle: `${base.btnSecondary} hover:bg-cs/10 active:bg-cs/20 focus-visible:border-cs`,
  checkboxStyle: `${base.checkbox} checked:bg-cs/50 focus-visible:ring-cs`,
  textInputStyle: `${base.textInput} focus-visible:border-cs`,
  highlightColor: 'bg-cs/30',
  contentStyle: 'cs-content',
  itemStyle: `${base.item} focus-visible:ring-cs`,
  sidebarBtnStyle: `${base.sidebarBtn} focus-visible:ring-cs`,
  svgColor: 'fill-cs',
  logoPosX: '8',
  editorBtnStyle: `${base.editorBtn} focus-visible:ring-cs`,
  activeEditorBtn: 'bg-cs/20',
};

const home = {
  bgColor: 'bg-default',
  textColor: 'text-default',
  btnPrimaryStyle: `${base.btnPrimary} bg-default/20 hover:bg-default/30 active:bg-default/40 focus-visible:ring-default`,
  btnSecondaryStyle: `${base.btnSecondary} hover:bg-default/10 active:bg-default/20 focus-visible:border-default`,
  checkboxStyle: `${base.checkbox} checked:bg-default/50 focus-visible:ring-default`,
  textInputStyle: `${base.textInput} focus-visible:border-default`,
  highlightColor: 'bg-default/30',
  contentStyle: '',
  itemStyle: '',
  sideBarBtnStyle: '',
  svgColor: 'fill-default',
  logoPosX: '',
  editorBtnStyle: `${base.editorBtn} focus-visible:ring-default`,
  activeEditorBtn: 'bg-default/20',
};

const styleScheme = { cs, home };

export default styleScheme;
