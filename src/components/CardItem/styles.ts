import ctl from '@netlify/classnames-template-literals';

export const cardContainer = ctl(`
  flex
  flex-col
  w-full
  h-full
  sm:h-auto
  md:h-auto
`);

export const frontCss = ctl(`
  flex
  flex-col
  w-full
  h-[770px]
  sm:h-[500px]
  md:h-[535px]
  lg:mb-4
`);

export const backCss = ctl(`
  flex
  flex-col
  w-full
  h-[770px]
  sm:h-[493px]
  md:h-[520px]
  lg:h-[513px]
  lg:mb-4
`);

export const backCard = ctl(`
  flex
  flex-col
  w-full
  h-full
`);

export const card = ctl(`
  flex
  flex-col
  w-full
  h-auto
  rounded-xl
  p-4
  md:px-6
  md:py-4
  bg-slate-100
  dark:bg-slate-800
  shadow-md
`);

export const imageContainer = ctl(`
  flex
  flex-col
  sm:flex-row
  space-x-2
  w-full
  h-full
  items-center
  sm:items-start
`);

export const container = ctl(`
  sm:px-2
  sm:py-4
  text-md
  sm:text-sm
  md:text-md
  text-center
  sm:text-left
  sm:space-y-4
  flex
  flex-col
  w-full
`);

export const cardName = ctl(`
  font-bold
  hover:text-orange-500
  focus-within:text-orange-400
  overflow-ellipsis
  whitespace-nowrap
`);

export const statuses = ctl(`
  flex
  flex-col
  space-y-2
`);

export const statusItem = ctl(`
  flex
  space-x-1
`);

export const iconLabel = ctl(`
  text-stone-500
  font-light
  capitalize
  overflow-ellipsis
  whitespace-nowrap
`);

export const icon = ctl(`
  w-5
  h-5
  mr-2
  self-start
`);

export const scrollContainer = ctl(`
  h-[670px]
  sm:h-[600px]
  md:h-[420px]
  overflow-y-auto
`);
