<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('store_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('category_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->integer('job_order')->nullable();
            $table->integer('order_number');
            $table->string('brand');
            $table->string('model');
            $table->decimal('downpayment')->default(0);
            $table->integer('quantity');
            $table->enum('status', ['delivered', 'open', 'in-transit', 'cancelled', 'onhold'])->default('open');
            $table->string('link')->nullable();
            $table->text('notes')->nullable();
            $table->jsonb('image_paths')->nullable();
            $table->dateTime('order_at')->default(now());
            $table->dateTime('order_at')->useCurrent();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
