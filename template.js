
template1=`<div class="container-fluid">
	<nav class="navbar navbar-dark bg-dark">
	<a class="navbar-brand">Navbar</a>
	<div class="form-inline">
		<input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" v-model="searchn" aria-label="Pesquisar">
		<button v-on:click="search()" class="btn btn-outline-success my-2 my-sm-0">Pesquisar</button>
	</div>
	</nav>
	<div v-if="pesq">
		<div class="d-flex flex-column align-items-center float-left p-2"style="width: 270px;">
			<img v-bind:src="profile.icone" class="img-circle" alt="Card image cap">
			<h4 class="text-center">{{profile.nickname}}</h4>
		</div>
		<div class="d-flex justify-content-center">
			<div class="d-flex flex-column align-items-center float-left p-0" style="width: 280px;">
				<div class="card-body">
					<h2 class="text-center">LOL</h2>
					<img v-bind:src="elo.img" class="img-circle2">
					<h4 class="text-center">{{elo.nome}} {{elo.rank}}</h4>
				</div>
			</div>
			<div class="d-flex flex-column align-items-center float-left p-0" style="width: 280px;">
				<div class="card-body">
					<h2 class="text-center">TFT</h2>
					<img v-bind:src="elotft.img" class="img-circle2">
					<h4 class="text-center">{{elotft.nome}}  {{elotft.rank}}</h4>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
	<h1 class="text-center">SEM RESULTADOS</h1>
	</div>
	<div v-for="partida,a in partidas" :style="cores[a]" class="card mb-2" v-if="pesq">
		<div class="card-body">
			<div class="d-flex flex-column align-items-center float-left p-0">
				<img class="w-50 rounded-circle" v-bind:src="cha(partida.champion,'img')" alt="">
				<h4>{{cha(partida.champion,'nome')}}</h4>
			</div>
			<div class="d-flex flex-column align-items-center float-left p-0">
				<h5>{{queu(partida.queue,'m')}}</h5>
				<h5>{{queu(partida.queue,'q')}}</h5>
			</div>
		</div>
	</div>
</div>`
                