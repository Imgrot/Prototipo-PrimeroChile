import { onBeforeUnmount, onMounted } from 'vue'

export function usePrototypeInteractions(rootSelector = '#app') {
  const findRoot = () => document.querySelector(rootSelector) || document

  const toggleSidebar = (button) => {
    const layout = button.closest('[data-layout]')
    layout?.classList.toggle('sidebar-collapsed')
  }

  const applyFilter = (button) => {
    const group = button.closest('[data-filter-group]')
    if (!group) return

    const filter = button.dataset.filterButton
    const scope = group.closest('[data-layout]') || group.parentElement || document
    const items = scope.querySelectorAll(group.dataset.filterTarget)
    const buttons = group.querySelectorAll('[data-filter-button]')

    buttons.forEach((item) => item.classList.remove('active'))
    button.classList.add('active')

    items.forEach((item) => {
      item.style.display = filter == 'all' || item.dataset.filterItem == filter ? '' : 'none'
    })
  }

  const scrollRow = (button, direction) => {
    const container = button.closest('.social-block, .community-card, .pc-card') || button.parentElement
    const row = container?.querySelector('[data-scroll-row]')
    if (!row) return

    const amount = Math.min(row.clientWidth * 0.9, 420)
    row.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  const handleClick = (event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const emptyLink = target.closest('a[href="#"]')
    if (emptyLink) {
      event.preventDefault()
    }

    const sidebarButton = target.closest('[data-sidebar-toggle]')
    if (sidebarButton) {
      toggleSidebar(sidebarButton)
      return
    }

    const filterButton = target.closest('[data-filter-button]')
    if (filterButton) {
      applyFilter(filterButton)
      return
    }

    const previousButton = target.closest('[data-scroll-prev]')
    if (previousButton) {
      scrollRow(previousButton, -1)
      return
    }

    const nextButton = target.closest('[data-scroll-next]')
    if (nextButton) {
      scrollRow(nextButton, 1)
    }
  }

  onMounted(() => {
    findRoot().addEventListener('click', handleClick)
  })

  onBeforeUnmount(() => {
    findRoot().removeEventListener('click', handleClick)
  })
}
