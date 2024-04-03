gsap.registerPlugin(Flip) // Flip between css classes with animation

function collapsibleButton(collapsibleBtnList) {
    collapsibleBtnList.forEach(btn => {
        btn.addEventListener("click", function() {
            var content = this.nextElementSibling
            var icon = this.children[0]

            // Step 1
            const state = Flip.getState(content);
            // Step 2
            const isContentActive = content.classList.contains("showing");
            if (isContentActive) {
                content.classList.remove("showing")
                this.classList.remove("active")
                icon.className = "fa fa-chevron-down"
            } else {
                content.classList.add("showing")
                this.classList.add("active")
                icon.className = "fa fa-chevron-up"
            }
            // Step 3
            Flip.from(state, {
                duration: 1,
                ease: "expo.out",
            })
        })
    })
}

collapsibleButton(document.querySelectorAll('.xxx-collapsible-button'))