<template>
    <div class="Blog">
        <div class="blog-header text-center w-100 mt-5 py-4">
            <h2>BLOG</h2>
            <div class="header-line mx-auto"></div>
        </div>
        <div class="blog-cards">
            <div class="container text-center">
                <BlogCard></BlogCard>
            </div>
                    <div class="pagination-container d-flex">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">
                    <font-awesome-icon :icon="['fas', 'angle-left']" />
                </span>
                <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
                </span>
                <span class="sr-only">Next</span>
                </a>
            </li>
            </ul>
        </nav>
        </div>
        </div>
        <div class="FixItBox">
            <FixItBox></FixItBox>
        </div>
    </div>

</template>
<script >
import BlogCard from '@/components/BlogCard.vue';
import FixItBox from '@/components/FixItBox.vue';
export default {
    name: "Blog",
    components: {
      BlogCard,
      FixItBox
    }
}
</script>
<style scoped>
.header-line {
  width: 100%;
  height: 3px;
  background-color: rgba(255, 215, 0, 1);
}
.page-item a{
    margin: 0;
    color: black;
}
.pagination-container .pagination .page-link{
    border: none;
}
.FixItBox {
    margin-bottom: 100px;
}
</style>