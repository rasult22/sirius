import { createSignal } from "solid-js"

export default function MyForm(props) {
  const [from, setFrom] = createSignal("")
  const [where, setWhere] = createSignal("")
  const [weight, setWeight] = createSignal("")
  const [phone, setPhone] = createSignal("")
  return <form class="bg-[#edeef0] rounded-[38px] py-6 px-6 text-[13px] text-[rgb(128, 151, 170)]">
    <div class="flex space-x-2">
      <div class="before:block before:top-[50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:left-3 before:bg-[url(/exchange.svg)] before:bg-contain relative w-full">
        <input class="w-full pl-9 pr-4 py-3 rounded-[12px]" value={from()} onChange={(e) => setFrom(e.target.value)} type="text" placeholder="Откуда" />
      </div>
      <div class="before:block before:top-[50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:left-3 before:bg-[url(/exchange.svg)] before:bg-contain relative w-full">
        <input class="w-full pl-9 pr-4 py-3 rounded-[12px]" value={where()} onChange={(e) => setWhere(e.target.value)} type="text" placeholder="Куда"/>
      </div>
    </div>
    <div class="before:block before:top-[50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:left-3 before:bg-[url(/weight.svg)] before:bg-contain relative w-full">
      <input class="block w-full pl-9 pr-4 py-3 rounded-[12px] mt-2" value={weight()} onChange={(e) => setWeight(e.target.value)} type="text" placeholder="Вес/Обьем от 300 кг"/>
    </div>
    <div class="before:block before:top-[50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:left-3 before:bg-[url(/phone-f.svg)] before:bg-contain relative w-full">
      <input class="block w-full pl-9 pr-4 py-3 rounded-[12px] mt-2" value={phone()} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Введите телефон"/>
    </div>
    <button class="text-[14px] mt-2 font-semibold uppercase text-[#66501b] bg-[#f4b926] w-full p-4 rounded-[30px]">Получить расчет</button>
    <div class="text-[13px] text-[#8097aa]">
    Нажимая на кнопку, Вы соглашаетесь
с условиями Политики конфиденциальности
    </div>
  </form>
}