export const useBgPos = () => {
    const offset = useState('background-offset', () => 0)
    const move = () => {
        offset.value += 200;
    }
    return {
        offset,
        move
    }
}