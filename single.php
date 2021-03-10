<?php
    /** 
    * Template Name: Single Post
    * @package aqua-seed-theme
    * @since 1.0 
    */

    get_header();
?>
<section id="single-content" class="container container-holder">
    <div class="d-flex justify-content-around align-items-start">
        <article class="col-md-8">
            <?php while (have_posts()) {
                the_post();
                the_content();
            } ?>
        </article>
        <aside class="col-md-4 pull-right">
            <h3> Categorias </h3>
            <ul>
                <?php wp_list_categories(["title_li" => ""]); ?>
            </ul>
        </aside>
    </div>
</section>
<?php get_footer(); ?>
