export const useBgPos = () => {
    const offset = useState('background-offset', () => 0)
    const move = (num) => {
        offset.value += num || 100;
    }
    return {
        offset,
        move
    }
}