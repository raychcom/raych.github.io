<script>
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='http']");
    links.forEach(link => {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  });
</script>