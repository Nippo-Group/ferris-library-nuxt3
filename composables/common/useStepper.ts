import { ref } from 'vue'

type StepperReturn = {
  active: Ref<number>
  next: () => void
  prev: () => void
  setActive: (num: number) => void
}

/**
 * ステッパーの制御を行う関数
 * @param {number} max ステッパーの最大値
 * @param {number} min ステッパーの最小値（default: 0）
 * @returns {StepperReturn} active, next, prev, setActive
 */
export const useStepper = (max?: number, min: number = 0): StepperReturn => {
  if (min < 0) {
    throw new Error('min must be greater than or equal to 0')
  }
  if (max !== undefined && max < min) {
    throw new Error('max must be greater than min')
  }

  const active = ref<number>(min)

  const next = () => {
    if (!max || active.value < max) {
      active.value++
    }
  }

  const prev = () => {
    if (active.value > min) {
      active.value--
    }
  }

  const setActive = (num: number) => {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
      throw new Error('num must be an integer')
    }
    if ((!max || num <= max) && num >= min) {
      active.value = num
    }
  }

  return {
    active,
    next,
    prev,
    setActive,
  }
}
