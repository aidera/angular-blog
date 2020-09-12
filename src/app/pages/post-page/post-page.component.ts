import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/models/Post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post = {
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'Lorams Smith',
    text: `<p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <br/>A aliquam aliquid architecto culpa distinctio dolores
      facilis fugit illo impedit ipsum iure iusto maxime minima molestiae nam natus nihil officia omnis optio pariatur
      perferendis perspiciatis porro praesentium provident quasi quibusdam quis, recusandae reiciendis rem reprehenderit
      repudiandae sapiente soluta tenetur ullam unde vel velit? Consequatur excepturi exercitationem facere, maxime
      perferendis reiciendis rem ullam! Alias consectetur dignissimos doloremque dolores ducimus eligendi eum, facere
      ipsum iusto labore, neque nesciunt obcaecati odio officiis placeat porro possimus praesentium quos ratione rem
      <br/><br/>repellat rerum sequi ut veritatis vitae. Excepturi facilis illo laborum minima mollitia, nam nulla odit pariatur
      possimus vero? Architecto assumenda atque consequuntur doloribus eaque enim esse facere illo minima mollitia nam
      necessitatibus nostrum nulla numquam, quaerat quibusdam quis quisquam quod saepe sequi similique suscipit tenetur
      ullam veniam voluptas voluptate voluptatum? Consequatur corporis cum cupiditate dolor doloremque enim eum
      expedita, facere hic nostrum placeat provident quaerat ratione reprehenderit rerum suscipit tempore, voluptates!
      Ab atque cum dignissimos ea eius eveniet ex inventore, iusto laborum neque nihil repellat sapiente totam ut
      voluptas? <strong>A aliquid amet, aperiam assumenda aut autem consequuntur</strong> cum cumque cupiditate ea eligendi ex facilis
      fugiat illo illum impedit iste laudantium maiores modi necessitatibus odio, perferendis possimus, provident quas
      quisquam quo rem totam ullam voluptas voluptatem! Ab accusantium alias aliquid autem beatae commodi culpa dicta
      dolor dolore dolorem exercitationem expedita, facere incidunt, ipsa iste laudantium, magnam maiores molestias nam
      natus nostrum nulla numquam quaerat quidem ratione reprehenderit sapiente sint tempora tenetur totam ullam veniam
      vitae voluptas. Consequatur cumque delectus doloribus dolorum, illum perspiciatis possimus quisquam rem sed
      voluptatum! A dolorum harum in iste necessitatibus nisi pariatur perferendis sapiente. Ab alias animi, aperiam
      architecto earum enim id iste, <strong>itaque magni minima, necessitatibus</strong> nobis non quis quo voluptatum? Adipisci autem
      consequatur ducimus esse facilis, harum illo illum labore maxime, minus mollitia necessitatibus neque nihil
      numquam officiis perferendis possimus praesentium quia rerum tempore tenetur totam vel veritatis. Natus,
      repudiandae ullam! Dolorum ducimus est fuga maxime nobis omnis possimus, reprehenderit unde ut veniam. Architecto
      dolorum eius laborum numquam qui. Aperiam debitis facilis fugiat nulla, placeat quasi repellat rerum. Ab ad
      assumenda blanditiis, cum <br/><br/>distinctio dolor ducimus eius facere harum hic illum impedit in ipsum iste libero modi
      nisi omnis porro possimus praesentium provident quae quas quos sit veritatis? Facere in, maxime non quos
      temporibus ullam voluptas! Ad atque cupiditate eveniet ipsa iste modi, mollitia natus, obcaecati quam, qui
      quisquam recusandae rem sed. Ad assumenda consequatur cupiditate dicta enim iusto laboriosam nam, nesciunt nostrum
      optio pariatur placeat quidem reprehenderit ullam voluptas voluptatibus voluptatum? Alias quae quam ullam ut
      velit. Dignissimos eum fugit minus natus nobis obcaecati odit? Ad atque et hic laboriosam maiores minus officia
      officiis quasi tempora ullam! Accusamus alias debitis delectus dolore eveniet fugit reiciendis ullam voluptatibus.
      Aliquam amet animi asperiores at atque dicta dolorem doloribus eligendi enim et hic illo in laborum maxime, modi
      praesentium quae repellendus sint, tenetur veritatis. Cum esse explicabo id natus quia. Blanditiis, dolor error
      facilis ipsum nobis officia rem reprehenderit temporibus! Doloribus, modi.
    </p>`,
    date: new Date(),
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
