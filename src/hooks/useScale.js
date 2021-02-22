import { onMounted, onUnmounted, ref } from 'vue';
import scalelv from "../utils/scaleLv";
export default function useScale() {
    const curScale = ref(0);
    function onMouseWheel(e) {
        const designer = document.getElementById("designer");
        const designerRect = designer.getBoundingClientRect();
        if (e.pageX > designerRect.x && e.pageX < designerRect.x + designerRect.width) {
            if (e.deltaY < 0) {
                if (curScale.value < scalelv.length - 1) {
                    curScale.value += 1;
                }
            }
            else {
                if (curScale.value > 0) {
                    curScale.value -= 1;
                }
            }
        }
    }
    onMounted(() => {
        //@ts-ignore
        window.addEventListener("mousewheel", onMouseWheel, false);
    });
    onUnmounted(() => {
        //@ts-ignore
        window.removeEventListener("mousewheel", onMouseWheel, false);
    });
    return curScale;
}
//# sourceMappingURL=useScale.js.map